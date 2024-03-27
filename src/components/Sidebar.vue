<template>
    <aside :class="{ 'is-expanded': is_expanded }">
        <div class="logo">
            <img :src="logoURL" alt="toolist" /> 
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>

        <div class="menu">
            <router-link to="/about" class="button">
                <span class="material-icons">group</span>
                <span class="text">Members</span>
            </router-link>
            <router-link to="/team" class="button">
                <span class="material-icons">settings</span>
                <span class="text">Workspace setting</span>
            </router-link>

            <h3>Workspace View</h3>

            <router-link to="/table" class="button">
                <span class="material-icons">table_view</span>
                <span class="text">Table</span>
            </router-link>
            <router-link to="/calender" class="button">
                <span class="material-icons">calendar_month</span>
                <span class="text">Calender</span>
            </router-link>

            <h3>Our Boards</h3>
            <router-link to="/" class="button" @click="editBoardName">
				<span class="material-icons">assignment</span>
				<span class="text" v-if="!isEditingBoardName">{{ boardName }}</span>
				<input type="text" v-else :value="boardName" @keyup.enter="saveEditedBoardName">
			</router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/toolist.png'
import { boardName, isEditingBoardName, editBoardName, saveEditedBoardName } from '../stateManagement'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;	

	background-color: #4a464f;
	color: var(--light);

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-top: 60px;
		margin-left: -16px;
		img {
			width: 4rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons, .material-symbols-outlined {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons, .material-symbols-outlined {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: #ffffff;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	input.editing {
        background-color: #58565c;
        border: 1px solid var(--primary);
        color: var(--primary);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        transition: background-color 0.3s ease-in-out;
        width: 100%;

        &:focus {
            outline: none;
        }
    }

    input:not(.editing) {
        background-color: transparent;
        border: none;
        color: #ffffff;
        padding: 0.5rem 1rem;
        border-bottom: 1px solid #ffffff;
        width: 100%;
        transition: border-color 0.3s ease-in-out;
		text-decoration: none;

        &:focus {
            border-bottom: 1px solid var(--primary);
            outline: none;
        }
    }

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
		
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: #ffffff;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: #ffffff;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: #58565c;

				.material-icons, .text {
					color: var(--primary);
				}
			}

			&.router-link-exact-active {
				background-color: #28262b;
				border-right: 5px solid var(--primary);

				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.4s ease-in-out;

		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>